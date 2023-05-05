import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerVoicemailIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerVoicemailIcon = React.forwardRef<SVGSVGElement, TablerVoicemailIconProps>(
	function TablerVoicemailIcon(props, ref) {
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
				<path d="M10 12 A4 4 0 0 1 6 16 A4 4 0 0 1 2 12 A4 4 0 0 1 10 12" />
				<path d="M22 12 A4 4 0 0 1 18 16 A4 4 0 0 1 14 12 A4 4 0 0 1 22 12" />
				<path d="M6 16 L18 16" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerVoicemailIcon.displayName = "TablerVoicemailIcon";
}
