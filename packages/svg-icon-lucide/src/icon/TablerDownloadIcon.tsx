import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDownloadIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDownloadIcon = React.forwardRef<SVGSVGElement, TablerDownloadIconProps>(function TablerDownloadIcon(
	props,
	ref
) {
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
			<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
			<path d="M7 10 L12 15 L17 10" />
			<path d="M12 15 L12 3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerDownloadIcon.displayName = "TablerDownloadIcon";
}
