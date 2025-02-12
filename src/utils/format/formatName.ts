export default function formatName(hostName: string | undefined) {
  if (!hostName) return '';
  return hostName.length > 6 ? `${hostName.slice(0, 6)}...` : hostName;
}
