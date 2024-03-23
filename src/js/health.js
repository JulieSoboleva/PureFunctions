export default function getHealth(person) {
    if (person.health > 50) {
        return 'healthy';
    }
    if (person.health > 14) {
        return 'wounded';
    }
    return 'critical';
}