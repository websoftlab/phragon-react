import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAlbumIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAlbumIcon = React.forwardRef<SVGSVGElement, TablerAlbumIconProps>(function TablerAlbumIcon(
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
			<path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
			<path d="M12 4v7l2 -2l2 2v-7" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerAlbumIcon.displayName = "TablerAlbumIcon";
}
