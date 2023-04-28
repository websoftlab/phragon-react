import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPhotoCancelIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPhotoCancelIcon = React.forwardRef<SVGSVGElement, TablerPhotoCancelIconProps>(
	function TablerPhotoCancelIcon(props, ref) {
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
				<path d="M15 8h.01" />
				<path d="M12.5 21h-6.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6.5" />
				<path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l3 3" />
				<path d="M14 14l1 -1c.616 -.593 1.328 -.792 2.008 -.598" />
				<path d="M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				<path d="M17 21l4 -4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPhotoCancelIcon.displayName = "TablerPhotoCancelIcon";
}
