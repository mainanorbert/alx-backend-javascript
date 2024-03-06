import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstname, lastname, filename) {
  const promises = [
    signUpUser(firstname, lastname),
    uploadPhoto(filename),
  ];
  return Promise.allSettled(promises)
    .then((res) => res.map((r) => ({
      status: r.status,
      value: r.status === 'fulfilled' ? r.value : r.reason,
    })));
}
