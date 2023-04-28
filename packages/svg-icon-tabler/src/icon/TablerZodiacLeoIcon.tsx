import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerZodiacLeoIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerZodiacLeoIcon = React.forwardRef<SVGSVGElement, TablerZodiacLeoIconProps>(
	function TablerZodiacLeoIcon(props, ref) {
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
				<path d="M13 17a4 4 0 1 0 8 0" />
				<path d="M6 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				<path d="M11 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
				<path d="M7 7c0 3 2 5 2 9" />
				<path d="M15 7c0 4 -2 6 -2 10" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerZodiacLeoIcon.displayName = "TablerZodiacLeoIcon";
}
