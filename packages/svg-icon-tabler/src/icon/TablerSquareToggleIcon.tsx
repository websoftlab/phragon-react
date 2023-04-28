import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSquareToggleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSquareToggleIcon = React.forwardRef<SVGSVGElement, TablerSquareToggleIconProps>(
	function TablerSquareToggleIcon(props, ref) {
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
				<path d="M12 2l0 20" />
				<path d="M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8" />
				<path d="M20 6a2 2 0 0 0 -2 -2" />
				<path d="M18 20a2 2 0 0 0 2 -2" />
				<path d="M20 10l0 4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSquareToggleIcon.displayName = "TablerSquareToggleIcon";
}
