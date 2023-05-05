import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFoldersIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFoldersIcon = React.forwardRef<SVGSVGElement, TablerFoldersIconProps>(function TablerFoldersIcon(
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
			<path d="M8 17h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.93a2 2 0 0 1-1.66-.9l-.82-1.2a2 2 0 0 0-1.66-.9H8a2 2 0 0 0-2 2v9c0 1.1.9 2 2 2Z" />
			<path d="M2 8v11c0 1.1.9 2 2 2h14" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFoldersIcon.displayName = "TablerFoldersIcon";
}
