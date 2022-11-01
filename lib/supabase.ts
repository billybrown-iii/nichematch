import AsyncStorage from "@react-native-async-storage/async-storage"
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://dnscclhzpcjmtdpecjmi.supabase.co"
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRuc2NjbGh6cGNqbXRkcGVjam1pIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjcyNzI2NzksImV4cCI6MTk4Mjg0ODY3OX0.7ljyVIdeUCaz1N7MBsRtAYoYMtzwV_O8gsnD0cjFpYU"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})
