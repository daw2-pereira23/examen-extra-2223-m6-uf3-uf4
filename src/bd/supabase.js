import { createClient } from '@supabase/supabase-js'
//Creando la conexión con supabase
const supabaseUrl = 'https://zpqznlvdpnrcqwoxauzo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpwcXpubHZkcG5yY3F3b3hhdXpvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NjMxOTE3NywiZXhwIjoyMDAxODk1MTc3fQ.nnNqQo3igKBxGq0czTcKOYCKkQ1hzFO1CuYhE1HcFDE'

//exportamos la conexión
export const supabase = createClient(supabaseUrl, supabaseKey)