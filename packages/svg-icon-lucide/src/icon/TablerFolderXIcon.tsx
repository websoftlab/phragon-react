import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFolderXIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFolderXIcon = React.forwardRef<SVGSVGElement, TablerFolderXIconProps>(function TablerFolderXIcon(
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
			<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
			<path d="m9.5 10.5 5 5" />
			<path d="m14.5 10.5-5 5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFolderXIcon.displayName = "TablerFolderXIcon";
}
