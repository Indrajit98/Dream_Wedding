import React from 'react';

const teamMember = [
    {
        name: 'Indrajit Chandra',
        pro: 'CEO',
        img: "data:image/jpeg;base64,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"
    },
    {
        name: 'Joydip Paul',
        pro: 'Wedding Planner',
        img: "https://cdn.dribbble.com/users/2942585/avatars/normal/open-uri20181217-12803-ezainn?1545052877"
    },
    {
        name: 'Ashis Chanda Mohon',
        pro: 'Manager',
        img: "https://media-exp1.licdn.com/dms/image/C5603AQEmDGKhYrluVQ/profile-displayphoto-shrink_200_200/0/1648198235432?e=1669852800&v=beta&t=6paMZa6j0HnzA38rdbw7Qr70E_-PwGLS59APHDGh1hU"
    },
    {
        name: 'Dipto Kar',
        pro: 'Photographer',
        img: "https://scontent.fdac22-1.fna.fbcdn.net/v/t1.6435-9/139150275_1644481565722266_1482799180030069404_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=FewQbVXrD48AX8y9Xr6&tn=IS194V7qPQpZiA2f&_nc_ht=scontent.fdac22-1.fna&oh=00_AfDbQ8rgk1Kt9Njaix5Ypkv3x6TJAnifRcDN2lnQN3hgwA&oe=6392EBFE"
    },
]

const TeamMember = () => {
    return (
        <div className='my-20'>
            <h1 className='md:text-5xl text-xl font-bold text-center pb-12 gap-4'>Our Team Member</h1>
            <div className='grid md:grid-cols-4 grid-cols-1 gap-5 md:w-3/4 mx-auto '>
                {
                    teamMember.map(member => <div key={member.name}>
                        <div className='bg-slate-200 rounded-lg p-4'>
                            <div className='' style={{ height: '230px' }}>
                                <img className='h-full w-full object-cover' src={member.img} alt="" />
                            </div>
                            <p className='text-xl font-semibold'>{member.name}</p>
                            <p className=''>{member.pro}</p>
                        </div>

                    </div>)
                }
            </div>


        </div>
    );
};

export default TeamMember;