'use client';

import { useActiveSection } from '@/hooks/useActiveSection';

const MainPageClient = () => {
    useActiveSection(['hero', 'engineering', 'intelligence','projects', 'contact']);

    return null;
}
export default MainPageClient;