namespace Backend.Day1.Models.Weapon
{
    public interface IWeapon
    {
        Bullet CreateBullet();

        void Shot(Game game);
    }
}
