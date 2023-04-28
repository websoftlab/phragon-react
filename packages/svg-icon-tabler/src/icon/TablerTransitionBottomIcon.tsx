import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTransitionBottomIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTransitionBottomIcon = React.forwardRef<SVGSVGElement, TablerTransitionBottomIconProps>(
	function TablerTransitionBottomIcon(props, ref) {
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
				<path d="M21 18a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3" />
				<path d="M3 3m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v0a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
				<path d="M12 9v8" />
				<path d="M9 14l3 3l3 -3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTransitionBottomIcon.displayName = "TablerTransitionBottomIcon";
}
