import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDropletPlusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDropletPlusIcon = React.forwardRef<SVGSVGElement, TablerDropletPlusIconProps>(
	function TablerDropletPlusIcon(props, ref) {
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
				<path d="M18.602 12.004a6.66 6.66 0 0 0 -.538 -1.127l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546a7.16 7.16 0 0 0 5.033 1.56" />
				<path d="M16 19h6" />
				<path d="M19 16v6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDropletPlusIcon.displayName = "TablerDropletPlusIcon";
}
