import moment from "moment/moment";

export function dateFormatting(date) {
  if (date == null) return null
  return moment(date).format("DD/MM/YYYY HH:mm")
}

export function getName(user) {
  if (user == null) return undefined
  return user.firstName + ' ' + user.lastName
}

export function formattingBoolean(boolean) {
  if (boolean === true) {
    return "Sim"
  } else {
    return "Não"
  }
}
