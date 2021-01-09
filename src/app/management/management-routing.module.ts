import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';

import { ManagementComponent } from './management.component';
import { PlaylistDetailsComponent } from './playlist-details/playlist-details.component';
import { PlaylistsComponent } from './playlists/playlists.component';

const routes: Routes = [
  { path: '', component: ManagementComponent, children:[
    { path: 'playList', component: PlaylistsComponent },
    { path: 'playListDetails', component: PlaylistDetailsComponent },
    { path: 'CreatePlayList', component: CreatePlaylistComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }