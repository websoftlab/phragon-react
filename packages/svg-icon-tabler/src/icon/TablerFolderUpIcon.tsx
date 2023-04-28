import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFolderUpIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFolderUpIcon = React.forwardRef<SVGSVGElement, TablerFolderUpIconProps>(function TablerFolderUpIcon(
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
			<path d="M12 19h-7a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v3.5" />
			<path d="M19 22v-6" />
			<path d="M22 19l-3 -3l-3 3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFolderUpIcon.displayName = "TablerFolderUpIcon";
}
