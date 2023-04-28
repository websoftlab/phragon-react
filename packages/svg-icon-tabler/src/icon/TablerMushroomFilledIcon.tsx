import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMushroomFilledIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMushroomFilledIcon = React.forwardRef<SVGSVGElement, TablerMushroomFilledIconProps>(
	function TablerMushroomFilledIcon(props, ref) {
		const { children, ...rest } = props;
		return (
			<SvgIcon
				fill="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...rest}
				ref={ref}
				size={24}
				icon={undefined}
				strokeWidth={0}
				stroke="none"
			>
				<path d="M15 15v4a3 3 0 0 1 -5.995 .176l-.005 -.176v-4h6zm-10.1 -2a1.9 1.9 0 0 1 -1.894 -1.752l-.006 -.148c0 -5.023 4.027 -9.1 9 -9.1s9 4.077 9 9.1a1.9 1.9 0 0 1 -1.752 1.894l-.148 .006h-14.2z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMushroomFilledIcon.displayName = "TablerMushroomFilledIcon";
}
