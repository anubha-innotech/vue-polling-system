<template>
<h2>All Polls</h2>
<div class="polls-container">
    <div v-for="(poll,pollIndex) in polls" :key="poll.id" class="poll-box">
        <div class="poll-title">{{poll.title}}
            <span class="pollIcons" v-if="showPollIcons">
                <span @click="onTitleEdit(pollIndex)">Edit&#9998;</span>
                <span @click="onDelete(pollIndex)">Delete&#x1F5D1;</span>
            </span>
            <div class="update-poll-title-box" v-if="updateTitleIndex === pollIndex">
                <input type="text" placeholder="Updated Poll Title" v-model="updatedTitle" />
                <button @click="onUpdateTitle(pollIndex)">Update</button>              
            </div>
        </div>
        <div class="poll-options">
            <p v-for="(element, optionIndex) in poll.options" class="poll-option" :key="element.option">
                {{element.option}}
                <span class="vote" @click="onVote(pollIndex, optionIndex)">{{element.vote}}&#128077;</span>
                <span class="delete" @click="deletePollOption(pollIndex, optionIndex)" v-if="showPollIcons">&#10006; </span>
            </p>
            <div class="add-new-option" @click="addPollOption(pollIndex)">+ Add  new poll option</div>
            <div class="update-poll-option-box" v-if="addPollOptionIndex === pollIndex">
                <input type="text" placeholder="New Poll Option" v-model="newPollOption" />
                <button @click="onAddPollOption(pollIndex)">Update</button>              
            </div>
        </div>
        <h5></h5>
    </div>
</div>
</template>

<script>
import {
    useStore
} from 'vuex'
import {
    onUpdated,
    onMounted,
    ref,
} from 'vue'

export default {
    setup() {
        const store = useStore();
        let allPolls = ref([]);
        let allLocalPolls = ref([]);
        let polls = ref([]);
        let indexOfPollOptionToVote = null;
        let indexOfPollToVote = null;
        let pollVoted = false;
        let userDetails = ref('');
        let userRole = ref('');
        let showPollIcons = ref('false');
        let updateTitleIndex = ref('');
        let updatedTitle = ref('');
        let addPollOptionIndex = ref('');
        let newPollOption = ref('');

        onMounted(async () => {
            // console.log("on mounted");
            const result = await store.dispatch('allPolls/getAllPolls', {
                root: true
            })
            console.log(result);

            if (result) {
                allPolls.value = store.state.allPolls.allPolls;
                // console.log(allPolls.value);
                localStorage.setItem('allPolls', JSON.stringify(allPolls.value));
                allLocalPolls.value = JSON.parse(localStorage.getItem('allPolls'));
                // console.log(allLocalPolls.value);
                polls.value = allLocalPolls.value;

                if (localStorage.getItem('user') !== null) {
                    userDetails.value = JSON.parse(localStorage.getItem('user'));
                    console.log(userDetails);
                    userRole.value = userDetails.value.role;
                    // console.log(userRole.value);
                    if (userRole.value == 'Admin') {
                        showPollIcons.value = true;
                    } else {
                        showPollIcons.value = false;
                    }
                }
            }
        });
        
        onUpdated(async () => {
            // console.log("on mounted");
            const result = await store.dispatch('allPolls/getAllPolls', {
                root: true
            })
            console.log(result);

            if (result) {
                allPolls.value = store.state.allPolls.allPolls;
                // console.log(allPolls.value);
                localStorage.setItem('allPolls', JSON.stringify(allPolls.value));
                allLocalPolls.value = JSON.parse(localStorage.getItem('allPolls'));
                // console.log(allLocalPolls.value);
                polls.value = allLocalPolls.value;
            }
        });

        function onVote(pollIndex, optionIndex) {
            // console.log(pollIndex, optionIndex);
            // console.log(polls.value[pollIndex].options[optionIndex].vote );
            // if(indexOfPollOptionToVote === null) {
            //     polls.value[pollIndex].options[optionIndex].vote += 1;
            //     indexOfPollOptionToVote = optionIndex;
            //     indexOfPollToVote = pollIndex;
            // }
            // else if(indexOfPollOptionToVote != optionIndex && indexOfPollToVote === pollIndex) {
            //     polls.value[pollIndex].options[optionIndex].vote += 1;
            //     polls.value[pollIndex].options[indexOfPollOptionToVote].vote -= 1;
            //     indexOfPollOptionToVote = optionIndex;
            // }
            // else if(indexOfPollOptionToVote != optionIndex && indexOfPollToVote != pollIndex) {
            //     polls.value[pollIndex].options[optionIndex].vote += 1;
            //     polls.value[pollIndex].options[indexOfPollOptionToVote].vote -= 1;
            //     indexOfPollToVote = pollIndex
            // }
            // else if(indexOfPollOptionToVote === optionIndex && indexOfPollToVote ===  pollIndex) {
            //     polls.value[pollIndex].options[optionIndex].vote -= 1;
            //     indexOfPollOptionToVote = optionIndex
            // }
            // else if(indexOfPollOptionToVote === optionIndex && indexOfPollToVote !=  pollIndex) {
            //     polls.value[pollIndex].options[optionIndex].vote -= 1;
            //     indexOfPollOptionToVote = optionIndex
            // }
            if (pollVoted === false) {
                polls.value[pollIndex].options[optionIndex].vote += 1;
                pollVoted = false;
                indexOfPollOptionToVote = optionIndex;
                indexOfPollToVote = pollIndex;
            }
            // else if(pollVoted === true && indexOfPollToVote == pollIndex) {
            //         // pollVoted = false;
            //         indexOfPollOptionToVote = optionIndex;

            // }

            // Getting the logged in user's token from local storage 
        }

        function onDelete(pollIndex) {
            let pollId = polls.value[pollIndex]._id;
            const result = store.dispatch('allPolls/deletePoll', {
                pollId: pollId
            }, {
                root: true
            })
            console.log(result);
            // console.log(polls.value[pollIndex]._id);
        }

        // Not working as api for voting poll is giving error 
        // function onVotingPoll(pollIndex,optionIndex) {
        //     let pollId = polls.value[pollIndex]._id;
        //     let optionText = polls.value[pollIndex].options[optionIndex].option;
        //     // console.log(optionText);
        //     const result = store.dispatch('allPolls/onVotingPoll', {
        //         pollId : pollId,
        //         optionText : optionText,
        //     },
        //     {
        //         root : true
        //     })
        //     console.log(result);
        // }

        function deletePollOption(pollIndex, optionIndex) {
            let pollId = polls.value[pollIndex]._id;
            let optionText = polls.value[pollIndex].options[optionIndex].option;
            const result = store.dispatch('allPolls/deletePollOption', {
                pollId: pollId,
                optionText: optionText,
            }, {
                root: true
            })
            console.log(result);
        }

        function onTitleEdit(pollIndex) {
            updateTitleIndex.value = pollIndex
        }

        function onUpdateTitle(pollIndex) {
            let pollId = polls.value[pollIndex]._id;
            const result = store.dispatch('allPolls/onUpdateTitle', {
                pollId: pollId,
                updatedTitle: updatedTitle.value,
            }, {
                root: true
            })
            console.log(result);
            if (result) {
                updateTitleIndex.value = '';
                updatedTitle.value = '';
            }
        }

        function addPollOption(pollIndex) {
            addPollOptionIndex.value = pollIndex;
        }

        function onAddPollOption(pollIndex) {
            console.log('add poll option');
            let pollId = polls.value[pollIndex]._id;
            const result = store.dispatch('allPolls/addPollOption', {
                pollId: pollId,
                newPollOption: newPollOption.value,
            }, {
                root: true
            })
            console.log(result);
            if (result) {
                addPollOptionIndex.value = '';
                newPollOption.value = '';
            }
        }

        return {
            allPolls,
            allLocalPolls,
            polls,
            onVote,
            indexOfPollOptionToVote,
            indexOfPollToVote,
            userDetails,
            userRole,
            showPollIcons,
            onDelete,
            // onVotingPoll,
            deletePollOption,
            onUpdateTitle,
            updateTitleIndex,
            updatedTitle,
            onTitleEdit,
            addPollOption,
            addPollOptionIndex,
            onAddPollOption,
            newPollOption,
        }
    }
}
</script>

<style>
.polls-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    flex-direction: row;
}

.poll-box {
    background-color: rgba(255, 255, 225, 0.85);
    border-radius: 0 10px 0 10px;
    width: 28%;
    margin: 10px;
    padding: 10px;
}

.poll-title {
    padding: 5px 0px;
    font-size: x-large;
    text-align: center;
}

.poll-option {
    background-color: rgba(0, 0, 0, .1);
    padding: 10px;
    margin: 5px;
    font-size: 18px;
}

.vote {
    cursor: pointer;
    float: right;
}

.delete {
    float: left;
    cursor: pointer;
}

.pollIcons {
    float: right;
    font-size: 18px;
    cursor: pointer;
}

.update-poll-title-box {
    font-size: 16px;
}

.add-new-option {
    cursor: pointer;
}

.add-new-option-box{
    font-size: 16px;
}

</style>
