import { createClient } from
  "https://esm.sh/@supabase/supabase-js@2";

// Substitua pelos dados do seu projeto
const supabaseUrl = "https://sbcderkjoneicfejowgn.supabase.co";
const supabaseKey = "sb_publishable_-o0lImVtQFwRmoHm7zx4bQ_hzNgx5En";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
