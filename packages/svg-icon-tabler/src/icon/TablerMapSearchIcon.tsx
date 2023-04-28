import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMapSearchIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMapSearchIcon = React.forwardRef<SVGSVGElement, TablerMapSearchIconProps>(
	function TablerMapSearchIcon(props, ref) {
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
				<path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v8" />
				<path d="M9 4v13" />
				<path d="M15 7v5" />
				<path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				<path d="M20.2 20.2l1.8 1.8" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMapSearchIcon.displayName = "TablerMapSearchIcon";
}
