import { workshop as workshopPath } from '@/configs/route-paths';

export function generateWorkshopRoute({ id }) {
    return workshopPath.replace(':id', id) 
}