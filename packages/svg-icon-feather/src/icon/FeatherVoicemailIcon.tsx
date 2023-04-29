import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherVoicemailIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherVoicemailIcon = React.forwardRef<SVGSVGElement, FeatherVoicemailIconProps>(
	function FeatherVoicemailIcon(props, ref) {
		const { children, ...rest } = props;
		return (
			<SvgIcon
				stroke="currentColor"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
				{...rest}
				ref={ref}
				size={24}
				icon={undefined}
				fill="none"
			>
				<circle cx="5.5" cy="11.5" r="4.5" />
				<circle cx="18.5" cy="11.5" r="4.5" />
				<line x1="5.5" y1="16" x2="18.5" y2="16" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherVoicemailIcon.displayName = "FeatherVoicemailIcon";
}
