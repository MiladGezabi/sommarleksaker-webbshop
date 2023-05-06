

export const validation = (name, password) => {
  let errors = {}

  if(!name) {
    errors.name = "användarnamn krävs"
  }
  else if (name.length < 5) {
    errors.name = "Måste innehålla minst 5 tecken"
  }

  if(!password) {
    errors.password = "Lösenord krävs"
  }
  else if (password.length < 8) {
    errors.password = "Måste innehålla minst 8 tecken"
  }

  return errors
}