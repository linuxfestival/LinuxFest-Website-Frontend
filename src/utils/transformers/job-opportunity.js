export default function ({
  jlink: link,
  jobDescription: description,
  jobName: name,
  _id: id,
}) {
  return {
    id,
    name,
    description,
    link,
  }
}
