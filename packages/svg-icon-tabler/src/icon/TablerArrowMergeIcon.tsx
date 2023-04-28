import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowMergeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowMergeIcon = React.forwardRef<SVGSVGElement, TablerArrowMergeIconProps>(
	function TablerArrowMergeIcon(props, ref) {
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
				<path d="M8 7l4 -4l4 4" />
				<path d="M12 3v5.394a6.737 6.737 0 0 1 -3 5.606a6.737 6.737 0 0 0 -3 5.606v1.394" />
				<path d="M12 3v5.394a6.737 6.737 0 0 0 3 5.606a6.737 6.737 0 0 1 3 5.606v1.394" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowMergeIcon.displayName = "TablerArrowMergeIcon";
}
