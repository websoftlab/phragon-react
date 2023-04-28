import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerUserSearchIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerUserSearchIcon = React.forwardRef<SVGSVGElement, TablerUserSearchIconProps>(
	function TablerUserSearchIcon(props, ref) {
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
				<path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
				<path d="M6 21v-2a4 4 0 0 1 4 -4h1.5" />
				<path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				<path d="M20.2 20.2l1.8 1.8" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerUserSearchIcon.displayName = "TablerUserSearchIcon";
}
