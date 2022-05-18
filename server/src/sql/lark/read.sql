SELECT 
  email,
  en_name,
  name,
  user_id,
  open_id,
  union_id,
  avatar_url,
  create_timestamp
FROM
  lark
WHERE
  1 = 1
  AND email = $email$