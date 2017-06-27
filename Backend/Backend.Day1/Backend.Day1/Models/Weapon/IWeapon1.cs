namespace Backend.Day1.Models.Weapon
{
       public interface IWeapon1
    {
        Burst CreateBurst();

        void Shot(Game game);
    }
}
