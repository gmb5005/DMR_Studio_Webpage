import { useAuth } from '../AuthContext';
import DMRHeader from '../main/DMRHeader';

export default function MyMangaPage() {
  const { user } = useAuth();

  return (
    <div className='background'>
      <DMRHeader />
      <div className="header">
        NEED TO CREATE USER MANGA PAGE OF MANGA THEY READ
      </div>
    </div>
  );
}