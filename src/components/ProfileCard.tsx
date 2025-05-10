interface ProfileCardProps {
    profile: {
        name: {
            first: string;
            last: string;
        };
        email: string;
        picture: {
            large: string;
        };
    };
}

function ProfileCard({ profile }: ProfileCardProps) {

    return (
        <figure className='DisplayProfile'>
            <img src={profile.picture.large} alt={profile.name.first} />
            <figcaption>
                <strong>{profile.name.first} {profile.name.last} </strong>
                 : {profile.email}
            </figcaption>
        </figure>
    );
}

export default ProfileCard;