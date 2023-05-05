import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTagsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTagsIcon = React.forwardRef<SVGSVGElement, TablerTagsIconProps>(function TablerTagsIcon(props, ref) {
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
			<path d="M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5Z" />
			<path d="M6 9.01V9" />
			<path d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTagsIcon.displayName = "TablerTagsIcon";
}
