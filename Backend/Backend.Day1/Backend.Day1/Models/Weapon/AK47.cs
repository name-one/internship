namespace Backend.Day1.Models.Weapon
{
    public class AK47 : IWeapon1
    {
        private readonly Person _person;

        public AK47 (Person person)
        {
            _person = person;
        }

        public Burst CreateBurst()
        {
            return new Burst(_person.Direction);
        }

        public void Shot(Game game)
        {
            Burst bullet = CreateBurst();

            bullet.X = _person.X;
            bullet.Y = _person.Y;

            game.AddObject(bullet);
        }
    }
}
