export const fetchMessages = userId => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/messages`,
  })
}

export const createMessage = (message, receiverId) => {
  return $.ajax({
    method: 'POST',
    url: `/api/users/${receiverId}/messages`,
    data: { message },
  })
}

export const deleteMessage = (userId, messageId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/users/${userId}/messages/${messageId}`,
  })
}