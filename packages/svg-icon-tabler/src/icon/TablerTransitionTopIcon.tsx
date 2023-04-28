import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTransitionTopIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTransitionTopIcon = React.forwardRef<SVGSVGElement, TablerTransitionTopIconProps>(
	function TablerTransitionTopIcon(props, ref) {
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
				<path d="M21 6a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3" />
				<path d="M6 21h12a3 3 0 0 0 0 -6h-12a3 3 0 0 0 0 6z" />
				<path d="M12 15v-8" />
				<path d="M9 10l3 -3l3 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTransitionTopIcon.displayName = "TablerTransitionTopIcon";
}
