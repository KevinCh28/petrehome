export const fetchMessages = userId => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/messages`,
  })
}

export const createMessage = (message, userId) => {
  return $.ajax({
    method: 'POST',
    url: `/api/users/${userId}/messages`,
    data: { message },
  })
}

export const deleteMessage = (userId, messageId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/users/${userId}/messages/${messageId}`,
  })
}