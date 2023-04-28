import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerZodiacAriesIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerZodiacAriesIcon = React.forwardRef<SVGSVGElement, TablerZodiacAriesIconProps>(
	function TablerZodiacAriesIcon(props, ref) {
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
				<path d="M12 5a5 5 0 1 0 -4 8" />
				<path d="M16 13a5 5 0 1 0 -4 -8" />
				<path d="M12 21l0 -16" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerZodiacAriesIcon.displayName = "TablerZodiacAriesIcon";
}
