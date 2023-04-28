import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerToiletPaperOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerToiletPaperOffIcon = React.forwardRef<SVGSVGElement, TablerToiletPaperOffIconProps>(
	function TablerToiletPaperOffIcon(props, ref) {
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
				<path d="M4.27 4.28c-.768 1.27 -1.27 3.359 -1.27 5.72c0 3.866 1.343 7 3 7s3 -3.134 3 -7c0 -.34 -.01 -.672 -.03 -1" />
				<path d="M21 10c0 -3.866 -1.343 -7 -3 -7" />
				<path d="M7 3h11" />
				<path d="M21 10v7m-1.513 2.496l-1.487 -.496l-3 2l-3 -3l-3 2v-10" />
				<path d="M6 10h.01" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerToiletPaperOffIcon.displayName = "TablerToiletPaperOffIcon";
}
