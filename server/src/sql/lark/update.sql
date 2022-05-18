UPDATE lark SET
  en_name = $en_name$,
  name = $name$,
  user_id = $user_id$,
  open_id = $open_id$,
  union_id = $union_id$,
  avatar_url = $avatar_url$,
  modify_timestamp = current_timestamp
WHERE
  1 = 1
  AND email = $email$