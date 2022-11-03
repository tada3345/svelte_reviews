<script>
import {FeedbackStore} from'../stores.js'

    $:count = $FeedbackStore.length
    $:average = ($FeedbackStore.reduce((a, {rating})=>a+rating, 0)/$FeedbackStore.length).toFixed(1)
</script>

<div class="feedback-stats">
    <h4>{count} 個のレビューが届きました。</h4>
    <h4>平均: {average} </h4>
</div>

<style>
    .feedback-stats{
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
</style>