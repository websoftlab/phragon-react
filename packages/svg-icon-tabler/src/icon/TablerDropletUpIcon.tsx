import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDropletUpIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDropletUpIcon = React.forwardRef<SVGSVGElement, TablerDropletUpIconProps>(
	function TablerDropletUpIcon(props, ref) {
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
				<path d="M18.6 11.998a6.66 6.66 0 0 0 -.536 -1.12l-4.89 -7.26c-.42 -.626 -1.287 -.804 -1.936 -.398a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546a7.16 7.16 0 0 0 5.002 1.562" />
				<path d="M19 22v-6" />
				<path d="M22 19l-3 -3l-3 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDropletUpIcon.displayName = "TablerDropletUpIcon";
}
