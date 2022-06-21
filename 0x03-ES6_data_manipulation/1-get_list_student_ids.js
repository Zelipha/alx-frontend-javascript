export default function getListStudentIds(list) {
  if (Array.isArray(list)) {
    return list.map((obj) => obj.id);
  }
  return [];
}
