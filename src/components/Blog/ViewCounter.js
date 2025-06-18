'use client';

import React, { useEffect, useState } from "react";
import { createClient } from '@supabase/supabase-js';

const ViewCounter = ({ slug, noCount = false, showCount = true }) => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      );

      const incrementView = async () => {
        try {
          const { error } = await supabase.rpc("increment", {
            slug_text: slug,
          });

          if (error) {
            console.error("Error incrementing view count:", error);
          }
        } catch (error) {
          console.error("An error occurred while incrementing views:", error);
        }
      };

      if (!noCount) {
        incrementView();
      }
    }
  }, [slug, noCount]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      );

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
          console.error("An error occurred while fetching views:", error);
        }
      };

      getViews();
    }
  }, [slug]);

  if (showCount) {
    return <div>{views} views</div>;
  } else {
    return null;
  }
};

export default ViewCounter;
