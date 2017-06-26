namespace Backend.Day1.Models.Weapon
{
    public class Riffle : IWeapon
    {
        private readonly Person _person;

        public Riffle(Person person)
        {
            _person = person;
        }

        public Bullet CreateBullet()
        {
            return new Bullet(_person.Direction);
        }

        public void Shot(Game game)
        {
            Bullet bullet = CreateBullet();

            bullet.X = _person.X;
            bullet.Y = _person.Y;

            game.AddObject(bullet);
        }
    }
}
