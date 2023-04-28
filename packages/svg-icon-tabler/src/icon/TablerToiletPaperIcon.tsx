import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerToiletPaperIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerToiletPaperIcon = React.forwardRef<SVGSVGElement, TablerToiletPaperIconProps>(
	function TablerToiletPaperIcon(props, ref) {
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
				<path d="M6 10m-3 0a3 7 0 1 0 6 0a3 7 0 1 0 -6 0" />
				<path d="M21 10c0 -3.866 -1.343 -7 -3 -7" />
				<path d="M6 3h12" />
				<path d="M21 10v10l-3 -1l-3 2l-3 -3l-3 2v-10" />
				<path d="M6 10h.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerToiletPaperIcon.displayName = "TablerToiletPaperIcon";
}
