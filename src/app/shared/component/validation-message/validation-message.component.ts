import { Input, Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl } from "@angular/forms";
import { ValidationService } from "../../service/validation.service";
import { keys } from 'lodash'
import { CommonModule } from "@angular/common";
import { MessageModule } from "primeng/message";

@Component({
    selector: 'validation-message',
    standalone: true,
    imports: [
        CommonModule,
        MessageModule,
    ],
    templateUrl: './validation-message.component.html',
    styleUrls: ['./validation-message.component.scss']
})
export class ValidationMessageComponent implements OnInit {
    @Input() control: FormControl = this.formBuilder.control('');

    constructor(private validationService: ValidationService, private formBuilder: FormBuilder) {
    }

    ngOnInit() {
    }

    get errorMessage(): any {
        if (this.control && this.control.errors && this.control.touched) {
            let validatorName = keys(this.control.errors)[0];
            return this.validationService.getValidatorErrorMessage(validatorName, this.control.errors[validatorName]);
        } else {
            return null;
        }
    }


}
