/**
 * Created by itc_user on 7/21/2016.
 */
(function () {
    var app = angular.module('store', ['store-products']);


    app.controller('StoreController', function ($scope) {
        var vinyls = [
            {
                name: 'Please Please Me',
                price: 34.90,
                picture: './Pics/CoverPleasePleaseMe.jpg',
                description: 'The Beatles Please Please Me album was rush-released by Parlophone on 22nd March, 1963 to capitalise on the enormous success of the title track which had been the groups second single and their first no. 1 in the majority of UK charts.',
                tracks: [
                    {song:'I saw her standing there'},
                    {song:'Misery'},
                    {song: 'Anna (Go To Him)'},
                    {song: 'Chains'},
                    {song:'Boys'},
                    {song:'Ask Me Why'},
                    {song: 'Please Please Me'},
                    {song: 'Love Me Do'},
                    {song:'PS I Love You'},
                    {song: 'Baby Its You'},
                    {song: 'Chains'},
                    {song:'Boys'},
                    {song:'Ask Me Why'},
                    {song: 'A Taste Of Honey'},
                    {song: 'Theres A Place'},
                    {song: 'Twist And Shout'}
                    ],
                year: 1962,
                reviews: [
                    {
                        stars: 5,
                        body: "A must have for your Vinyl collection!!! First Beatles Album is simply history.",
                        author: "adi@gmail.com"
                    },
                    {
                        stars: 4,
                        body: "Not my favorite but definitely fun and nostalgic to hear!",
                        author: "lulu@gmail.com"
                    }
                ]
            },
            {
                name: 'With The Beatles',
                price: 34.90,
                picture: './Pics/CoverWithTheBeatles.jpg',
                description: 'With The Beatles carried on where Please Please Me had left off, melding more Lennon-McCartney originals with further highlights from their stage set. It also included the song-writing debut of their twenty-year old, Lead Guitarist, George Harrison.',
                tracks: [
                    {song:'It Wont Be Long'},
                    {song:'All Ive Got To Do'},
                    {song:'All My Loving'},
                    {song:'Dont Bother Me'},
                    {song:'Little Child'},
                    {song:'Till There Was You'},
                    {song:'Please Mister Postman'},
                    {song:'Roll Over Beethoven'},
                    {song:'Hold Me Tight'},
                    {song:'You Really Got A Hold On Me'},
                    {song:'I Wanna Be Your Man'},
                    {song:'Devil In Her Heart'},
                    {song:'Not A Second Time'},
                    {song:'Money (Thats What I Want)'}
                ],
                year: 1963,
                reviews: [
                ]
            },
            {
                name: 'A Hard Days Night',
                price: 34.90,
                picture: './Pics/CoverHardDaysNight.jpg',
                description: 'Of the albums 13 tracks seven were featured in the soundtrack of the film. One single had been released ahead of the album that being Cant Buy Me Love"/"You Cant Do That which had been issued on 20thMarch. It was also quite remarkable that for the first time on a Beatles album that all of the titles had been composed by John and Paul.',
                tracks: [
                    {song:'A Hard Days Night'},
                    {song:'All Ive Got To Do'},
                    {song:'All My Loving'},
                    {song:'Dont Bother Me'},
                    {song:'Little Child'},
                    {song:'Till There Was You'},
                    {song:'Please Mister Postman'},
                    {song:'Roll Over Beethoven'},
                    {song:'Hold Me Tight'},
                    {song:'You Really Got A Hold On Me'},
                    {song:'I Wanna Be Your Man'},
                    {song:'Devil In Her Heart'},
                    {song:'Not A Second Time'},
                    {song:'Money (Thats What I Want)'}
                ],
                year: 1963,
                reviews: [
                    {
                        stars: 5,
                        body: "A must have for your Vinyl collection!!! First Beatles Album is simply history.",
                        author: "adi@gmail.com"
                    },
                    {
                        stars: 4,
                        body: "Not my favorite but definitely fun and nostalgic to hear!",
                        author: "lulu@gmail.com"
                    }
                ]
            },
            {
                name: 'Beatles For Sale',
                price: 34.90,
                picture: './Pics/CoverBeatlesForSale.jpg',
                description: 'Beatles For Sale had been recorded on seven days scattered between August and October when their schedule was crammed with stage performances in the UK, Canada and the US and well as radio and television work. Given the lack of time it was not surprising that the group reverted to the 1963 formula of eight original songs and six covers.',
                tracks: [
                    {song:'A Hard Days Night'},
                    {song:'All Ive Got To Do'},
                    {song:'All My Loving'},
                    {song:'Dont Bother Me'},
                    {song:'Little Child'},
                    {song:'Till There Was You'},
                    {song:'Please Mister Postman'},
                    {song:'Roll Over Beethoven'},
                    {song:'Hold Me Tight'},
                    {song:'You Really Got A Hold On Me'},
                    {song:'I Wanna Be Your Man'},
                    {song:'Devil In Her Heart'},
                    {song:'Not A Second Time'},
                    {song:'Money (Thats What I Want)'}],
                reviews: [
                    {
                        stars: 5,
                        body: "A must have for your Vinyl collection!!! First Beatles Album is simply history.",
                        author: "adi@gmail.com"
                    },
                    {
                        stars: 4,
                        body: "Not my favorite but definitely fun and nostalgic to hear!",
                        author: "lulu@gmail.com"
                    }
                ]
            },
            {
                name: 'Help!',
                price: 34.90,
                picture: './Pics/CoverHelp.jpg',
                description: 'Released on 6th August, 1965, and eight months after Beatles For Sale, the recordings for Help! had actually started in earnest in mid February just one month after the guys had completed a season of Another Beatles Christmas Show at Londons Hammersmith Odeon. Within days of the final February session, they were off to the Bahamas to film scenes for the movie, which like A Hard Days Night was directed by Richard Lester.',
                tracks: 'I saw her standing there, Misery, Anna (Go To Him), Chains',
                reviews: [
                    {
                        stars: 5,
                        body: "A must have for your Vinyl collection!!! First Beatles Album is simply history.",
                        author: "adi@gmail.com"
                    },
                    {
                        stars: 4,
                        body: "Not my favorite but definitely fun and nostalgic to hear!",
                        author: "lulu@gmail.com"
                    }
                ]
            },
            {
                name: 'Rubber Soul',
                price: 34.90,
                picture: './Pics/CoverRubberSoul.jpg',
                description: 'Rubber Soul was another album for Christmas - released on 3rd December, 1965 just two weeks after final mixing had taken place. Following the release of their previous album The Beatles had undertaken a momentous tour of the USA and Canada including a record breaking appearance at New Yorks famous Shea Stadium.',
                tracks: 'I saw her standing there, Misery, Anna (Go To Him), Chains',
                reviews: [
                    {
                        stars: 5,
                        body: "A must have for your Vinyl collection!!! First Beatles Album is simply history.",
                        author: "adi@gmail.com"
                    },
                    {
                        stars: 4,
                        body: "Not my favorite but definitely fun and nostalgic to hear!",
                        author: "lulu@gmail.com"
                    }
                ]
            },
            {
                name: 'Revolver',
                price: 34.90,
                picture: './Pics/CoverRevolver.jpg',
                description: 'Having longer in the studio had paid off with greater creativity and experimentation and with John and Paul in fine form as writers. George also made his mark with three of his compositions appearing on a Beatles album for the first time. The first recordings released from these sessions, engineered by Geoff Emerick, was the single "Paperback Writer" and "Rain" and those tracks gave an indication of what was to come.',
                tracks: 'I saw her standing there, Misery, Anna (Go To Him), Chains',
                reviews: [
                    {
                        stars: 5,
                        body: "A must have for your Vinyl collection!!! First Beatles Album is simply history.",
                        author: "adi@gmail.com"
                    },
                    {
                        stars: 4,
                        body: "Not my favorite but definitely fun and nostalgic to hear!",
                        author: "lulu@gmail.com"
                    }
                ]
            },
            {
                name: 'Sgt. Peppers Lonely Hearts Club Band',
                price: 34.90,
                picture: './Pics/CoverSgtPeppers.jpg',
                description: 'Released on 1st June, 1967, Sgt. Peppers Lonely Hearts Club Band, the bands eighth album became the soundtrack to the "summer of love" but its appeal is timeless',
                tracks: 'I saw her standing there, Misery, Anna (Go To Him), Chains',
                reviews: [
                    {
                        stars: 5,
                        body: "A must have for your Vinyl collection!!! First Beatles Album is simply history.",
                        author: "adi@gmail.com"
                    },
                    {
                        stars: 4,
                        body: "Not my favorite but definitely fun and nostalgic to hear!",
                        author: "lulu@gmail.com"
                    }
                ]
            },
            {
                name: 'Magical Mystery Tour',
                price: 34.90,
                picture: './Pics/CoverMagicalMysteryTour.jpg',
                description: 'The Beatles devised, wrote and directed a television film called Magical Mystery Tour which was broadcast on BBC Television at Christmas, 1967',
                tracks: 'I saw her standing there, Misery, Anna (Go To Him), Chains',
                reviews: [
                    {
                        stars: 5,
                        body: "A must have for your Vinyl collection!!! First Beatles Album is simply history.",
                        author: "adi@gmail.com"
                    },
                    {
                        stars: 4,
                        body: "Not my favorite but definitely fun and nostalgic to hear!",
                        author: "lulu@gmail.com"
                    }
                ]
            },
            {
                name: 'The Beatles (White Album)',
                price: 34.90,
                picture: './Pics/CoverWhiteAlbum.jpg',
                description: 'The Beatles or "The White album" as it became better known was released on 22nd November, 1968 on the fifth anniversary of their second album, With The Beatles. A total of 34 new tracks were released in 1968 and 30 were contained on this one double-LP.',
                tracks: 'I saw her standing there, Misery, Anna (Go To Him), Chains',
                reviews: [
                    {
                        stars: 5,
                        body: "A must have for your Vinyl collection!!! First Beatles Album is simply history.",
                        author: "adi@gmail.com"
                    },
                    {
                        stars: 4,
                        body: "Not my favorite but definitely fun and nostalgic to hear!",
                        author: "lulu@gmail.com"
                    }
                ]
            },
            {
                name: 'Yellow Submarine',
                price: 34.90,
                picture: './Pics/CoverYellowSubmarine.jpg',
                description: 'Released in Britain on 17th January, 1969 (and a few days earlier in the US), Yellow Submarine was the soundtrack to an animated feature film which had received its UK premiere some six months earlier.',
                tracks: 'I saw her standing there, Misery, Anna (Go To Him), Chains',
                reviews: [
                    {
                        stars: 5,
                        body: "A must have for your Vinyl collection!!! First Beatles Album is simply history.",
                        author: "adi@gmail.com"
                    },
                    {
                        stars: 4,
                        body: "Not my favorite but definitely fun and nostalgic to hear!",
                        author: "lulu@gmail.com"
                    }
                ]
            },
            {
                name: 'Abbey Road',
                price: 34.90,
                picture: './Pics/CoverAbbeyRoad.jpg',
                description: 'First issued on 26th September, 1969 Abbey Road was the final Beatles album to be recorded but not their last to be released. Let It Be, though mainly recorded in January, 1969 was finally released in May, 1970 alongside the film of the same name.',
                tracks: 'I saw her standing there, Misery, Anna (Go To Him),Chains',
                reviews: [
                    {
                        stars: 5,
                        body: "A must have for your Vinyl collection!!! First Beatles Album is simply history.",
                        author: "adi@gmail.com"
                    },
                    {
                        stars: 4,
                        body: "Not my favorite but definitely fun and nostalgic to hear!",
                        author: "lulu@gmail.com"
                    }
                ]
            },
            {
                name: 'Let it be',
                price: 34.90,
                picture: './Pics/CoverLetItBe.jpg',
                description: 'Released on 8 May 1970, the Phil Spector produced Let It Be was the final album released by The Beatles. The songs also appear on the film of the same name.',
                tracks: 'I saw her standing there, Misery, Anna (Go To Him), Chains',
                reviews: [
                    {
                        stars: 5,
                        body: "A must have for your Vinyl collection!!! First Beatles Album is simply history.",
                        author: "adi@gmail.com"
                    },
                    {
                        stars: 4,
                        body: "Not my favorite but definitely fun and nostalgic to hear!",
                        author: "lulu@gmail.com"
                    }
                ]
            },
            {
                name: 'Past Masters',
                price: 34.90,
                picture: './Pics/CoverPastMasters.jpg',
                description: 'Past Masters from The Beatles',
                tracks: 'I saw her standing there, Misery, Anna (Go To Him), Chains',
                reviews: [
                    {
                        stars: 5,
                        body: "A must have for your Vinyl collection!!! First Beatles Album is simply history.",
                        author: "adi@gmail.com"
                    },
                    {
                        stars: 4,
                        body: "Not my favorite but definitely fun and nostalgic to hear!",
                        author: "lulu@gmail.com"
                    }
                ]
            }

        ];
        $scope.products = vinyls;

    });

    app.controller('PanelController', function () {
        this.tab =1;

        this.selectTab = function(setTab){
            this.tab = setTab;
        };
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        };
    });
    
    app.controller('ReviewController', function(){
        this.review ={};

        this.addReview = function (product) {
            product.reviews.push(this.review);
            this.review = {};
        };
    });

})();

    