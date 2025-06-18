'use client';

import React, { useEffect, useState } from "react";
import { createClient } from '@supabase/supabase-js';

const ViewCounter = ({ slug, noCount = false, showCount = true }) => {
  const [views, setViews] = useState(null);

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // If environment variables are missing, skip any Supabase logic
  const canUseSupabase = supabaseUrl && supabaseKey;

  useEffect(() => {
    if (typeof window !== 'undefined' && canUseSupabase) {
      const supabase = createClient(supabaseUrl, supabaseKey);

      const incrementView = async () => {
        try {
          const { error } = await supabase.rpc("increment", {
            slug_text: slug,
          });
          if (error) console.error("Error incrementing view count:", error);
        } catch (error) {
          console.error("View increment error:", error);
        }
      };

      if (!noCount) incrementView();
    }
  }, [slug, noCount, canUseSupabase]);

  useEffect(() => {
    if (typeof window !== 'undefined' && canUseSupabase) {
      const supabase = createClient(supabaseUrl, supabaseKey);

      const getViews = async () => {
        try {
          const { data, error } = await supabase
            .from('views')
            .select('count')
            .match({ slug })
            .single();

          if (error) {
            console.error("Error fetching views:", error);
          }

          setViews(data ? data.count : 0);
        } catch (error) {
          console.error("View fetch error:", error);
        }
      };

      getViews();
    }
  }, [slug, canUseSupabase]);

  if (!canUseSupabase) return null;

  if (showCount) {
    return <div>{views === null ? '...' : `${views} views`}</div>;
  }

  return null;
};

export default ViewCounter;
