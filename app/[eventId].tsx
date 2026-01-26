
import { useRouter } from 'next/router';

export default function PartyRoom() {
  const { query } = useRouter();
  return (
    <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h2>PartyRoom Demo</h2>
      <p>Event ID: {query.eventId}</p>
      <p>If you can see this, Next.js routing works.</p>
    </div>
  );
}
