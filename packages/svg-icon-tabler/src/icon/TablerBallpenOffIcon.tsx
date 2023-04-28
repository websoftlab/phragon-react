import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBallpenOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBallpenOffIcon = React.forwardRef<SVGSVGElement, TablerBallpenOffIconProps>(
	function TablerBallpenOffIcon(props, ref) {
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
				<path d="M14 6l7 7l-2 2" />
				<path d="M10 10l-4.172 4.172a2.828 2.828 0 1 0 4 4l4.172 -4.172" />
				<path d="M16 12l4.414 -4.414a2 2 0 0 0 0 -2.829l-1.171 -1.171a2 2 0 0 0 -2.829 0l-4.414 4.414" />
				<path d="M4 20l1.768 -1.768" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBallpenOffIcon.displayName = "TablerBallpenOffIcon";
}
